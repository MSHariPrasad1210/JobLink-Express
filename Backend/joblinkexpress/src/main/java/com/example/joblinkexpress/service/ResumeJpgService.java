package com.example.joblinkexpress.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.util.Optional;
import java.io.IOException;
import com.example.joblinkexpress.model.ResumeJpg;
import com.example.joblinkexpress.repository.ResumeJpgRepo;
import com.example.joblinkexpress.utils.DocumentUtils;


import jakarta.transaction.Transactional;
@Transactional
@Service
public class ResumeJpgService {

    @Autowired
    ResumeJpgRepo repo;

    public String uploadImage(MultipartFile file, String email) throws IOException {

        ResumeJpg imageData = repo.save(ResumeJpg.builder()
                .name(file.getOriginalFilename())
                .email(email)
                .content(DocumentUtils.compressImage(file.getBytes())).build());
        if (imageData != null) {
            return "file uploaded successfully : " + file.getOriginalFilename();
        }
        return null;
    }
    
    
    public byte[] downloadImage(String email) {
        Optional<ResumeJpg> dbImageData = repo.findByEmail(email);
        byte[] images = DocumentUtils.decompressImage(dbImageData.get().getContent());
        return images;
    }

}
