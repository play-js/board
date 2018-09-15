package com.pilot.board;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.pilot.board.model.BoardDAO;

@WebServlet("/create")
public class BoardAdd extends HttpServlet {
		
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
	throws ServletException, IOException {
	
		String content = req.getParameter("content");
		String id = req.getParameter("id");
		String title = req.getParameter("title");
		
		BoardDAO dao = BoardDAO.getInstance();
		
		dao.createPost(content, id, title);
		
	}
		
		
}