package com.pilot.board;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.pilot.board.model.BoardDAO;

@WebServlet("/delete")
public class BoardDelete extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String seq = req.getParameter("seq");
		
		BoardDAO dao = BoardDAO.getInstance();
		
		dao.deletePost(seq);
		
	}
	
}
