package com.pilot.board.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO {
	
	
	static BoardDAO dao = new BoardDAO();
	
	private Connection conn;
	
	// singleton
	public static BoardDAO getInstance() {
		
		return dao;
		
	}
	
	public BoardDAO() {
		conn = DBUtil.open();
	}
	
	public void createPost(String content, String id, String title) {
		
		try {
		
			PreparedStatement pstat = conn.prepareStatement("INSERT INTO T_BOARD (seq, id, content, title) VALUES (seq.nextval, ?, ?, ?)");

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
		
			PreparedStatement pstat = conn.prepareStatement("SELECT seq, id, content, title FROM T_BOARD");

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

	public void updatePost(BoardBean bean) {

		try {
			
			PreparedStatement pstat = conn.prepareStatement("UPDATE T_BOARD SET title = ?, content = ? WHERE seq = ?");
			
			pstat.setString(1, bean.getTitle());
			pstat.setString(2, bean.getContent());
			pstat.setString(3, bean.getSeq());
			
			
			pstat.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	public void deletePost(String seq) {

			
		try {
			
			PreparedStatement pstat = conn.prepareStatement("DELETE FROM T_BOARD WHERE seq = ?");
			
			pstat.setString(1, seq);
			
			pstat.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
