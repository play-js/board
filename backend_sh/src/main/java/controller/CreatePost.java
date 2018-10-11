package controller;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.PostDAO;

@WebServlet("/create")
public class CreatePost extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) {
        System.out.println("do Post create!!");

        try {
            PostDAO.getInstance().insertPostInfo(req.getParameter("writer"), req.getParameter("title"), req.getParameter("contents"));
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
