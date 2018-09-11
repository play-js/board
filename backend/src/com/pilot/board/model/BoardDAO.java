package com.pilot.board.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO {
	
	private Connection conn;
	
	public BoardDAO() {
		
		conn = DBUtil.open();
		
	}
	
	public void createPost(String content, String id, String title) {
		
		try {
		
			PreparedStatement pstat = conn.prepareStatement("INSERT INTO T_BOARD (id, content, title) VALUES (?, ?, ?)");

			pstat.setString(1, id);
			pstat.setString(2, content);
			pstat.setString(3, title);
			
			pstat.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	public List<BoardBean> selectPost() {
		
		List<BoardBean> list = new ArrayList<>();
		
		try {
		
			PreparedStatement pstat = conn.prepareStatement("SELECT id, content, title FROM T_BOARD");

			ResultSet rs = pstat.executeQuery();
			
			
			while (rs.next()) {
				BoardBean bean = new BoardBean();
				
				bean.setId(rs.getString(1));
				bean.setContent(rs.getString(2));
				bean.setTitle(rs.getString(3));
				
				list.add(bean);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return list;
	}
}
