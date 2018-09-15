package com.pilot.board;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.pilot.board.model.BoardBean;
import com.pilot.board.model.BoardDAO;

@WebServlet("/update")
public class BoardUpdate extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		BoardBean bean = new BoardBean();
		
		bean.setSeq(req.getParameter("seq"));
		bean.setTitle(req.getParameter("title"));
		bean.setContent(req.getParameter("content"));
		
		BoardDAO dao = BoardDAO.getInstance();
		
		dao.updatePost(bean);
		
	}
	
}
