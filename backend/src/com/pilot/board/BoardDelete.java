package com.pilot.board;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.pilot.board.model.BoardDAO;

@WebServlet("/delete")
public class BoardDelete extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		 FilterChain filterChain = new FilterChain(){
				@Override
				public void doFilter(ServletRequest arg0, ServletResponse arg1) throws IOException, ServletException {
					
				}
		 };
		 
		  if(req.getHeader("Access-Control-Request-Method") != null && "OPTIONS".equals(req.getMethod())) {        	
	            resp.addHeader("Access-Control-Allow-Origin", "*");
	            resp.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	            resp.addHeader("Access-Control-Allow-Headers", "content-type, accept, api_id, api_key");
	            resp.addHeader("Access-Control-Max-Age", "1800");
	        }

	   filterChain.doFilter(req, resp);
		String seq = req.getParameter("seq");
		
		BoardDAO dao = BoardDAO.getInstance();
		
		dao.deletePost(seq);
		
	}
	
}
