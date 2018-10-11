package controller;

import model.PostDAO;
import model.Post;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/update")
public class UpdatePost extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        System.out.println("do Post Update!!");

        try {
            int seq = Integer.parseInt(req.getParameter("seq"));

            PostDAO.getInstance().updatePost(seq,
                    req.getParameter("writer"),
                    req.getParameter("title"),
                    req.getParameter("contents"));


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
