package com.example.blog.controller;

import com.example.blog.entity.Login;
import com.example.blog.entity.User;
import com.example.blog.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private UserService userService;
    @PostMapping("/signup")
    ResponseEntity<String> signUp(@ModelAttribute User user,@RequestParam("profileimage")MultipartFile file){

        try {
            if (file.isEmpty()) {
                logger.info("No profile pic uploaded by user");
                user.setUserimg(null);
            } else if(file.getSize()>=1048576){
                logger.error("file size exceed for profile pic");
                return ResponseEntity.badRequest().body("exceedSize");
            }
            else{
                String fileName =user.getUsername()+ file.getOriginalFilename() ;

                File imageFile = new ClassPathResource("static/image").getFile();

               Path path = Paths.get(imageFile.getAbsolutePath()+File.separator+fileName);
                user.setUserimg(fileName);
                Files.copy(file.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);
                logger.info("image is uploaded with name {}",path);
            }
            logger.info("trying to signUp with credential {} ", user);
            return this.userService.signUp(user);
        }catch (Exception e){
            logger.error("failed due to {} ",e.toString());
            return ResponseEntity.badRequest().body("failed try again");
        }
    }

    @PostMapping("/login")
    ResponseEntity<User> login(@RequestBody Login login){
        logger.info("trying to login with credential {}" ,login);
        return this.userService.login(login);
    }


    @GetMapping(value = "/images/{imageName}")
    public void downloadImage(
           @PathVariable("imageName") String imageName, HttpServletResponse response
    ) throws IOException {
        File imageFile = new ClassPathResource("static/image").getFile();
        InputStream resource = this.userService.getResource(imageFile.getAbsolutePath(),imageName);
        response.setContentType(String.valueOf(MediaType.ALL));
        StreamUtils.copy(resource,response.getOutputStream());
        logger.info("picture served");
    }

    @GetMapping("/getalluser")
    ResponseEntity<?> getalluser(){
        logger.info("requested all users information");
        return this.userService.getalluser();
    }

}
