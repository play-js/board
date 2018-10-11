package controller;

import model.PostDAO;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/delete")
public class DeletePost extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res) {
        int seq = Integer.parseInt(req.getParameter("seq"));

        try {
            PostDAO.getInstance().deletePostInfo(seq);
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
