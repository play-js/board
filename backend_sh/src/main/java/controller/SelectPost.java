package controller;

import model.PostDAO;
import model.Post;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import com.google.gson.Gson;

import java.util.List;

@WebServlet("/select")
public class SelectPost extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        System.out.println("do Get SELECT!!");

        try {
            String seqStr = req.getParameter("seq");
            int seq = 0;

            if (seqStr != null) {
                seq = Integer.parseInt(seqStr);
            }

            PostDAO postInstance = PostDAO.getInstance();
            List<Post> list;

            if (seq > 0) {
                list = postInstance.selectPost(seq);
            } else {
                list = postInstance.selectPost();
            }

            String json = new Gson().toJson(list);

            res.setContentType("application/json");
            res.setCharacterEncoding("UTF-8");
            res.getWriter().write(json);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
