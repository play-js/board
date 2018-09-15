package com.pilot.board;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.pilot.board.model.BoardBean;
import com.pilot.board.model.BoardDAO;

@WebServlet("/select")
public class BoardSelect extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
	throws ServletException, IOException {

		BoardDAO dao = BoardDAO.getInstance();
		
		List<BoardBean> list = dao.selectPost();
		
		String json = new Gson().toJson(list);
		
		
		resp.setContentType("application/json");
		resp.setCharacterEncoding("UTF-8");
		resp.getWriter().write(json);
		
	}
	
}
