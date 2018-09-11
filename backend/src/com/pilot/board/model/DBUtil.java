package com.pilot.board.model;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBUtil {
	
	public static Connection open() {
		Connection conn = null;
		
		String url = "jdbc:oracle:thin:@mydb.cxl0cekogivb.us-east-1.rds.amazonaws.com:1521:orcl";
		String id = "daekun1234";
		String pw = "project1234";
		
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			
			conn = DriverManager.getConnection(url, id, pw);
			
			return conn;
			
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		
		return null;
	}
	

	public static Connection open(String serverIP, String id, String pw) {
		Connection conn = null;
		
		String url = serverIP;
		
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			
			conn = DriverManager.getConnection(url, id, pw);
			return conn;
		} catch (Exception e) {
			System.out.println(e.toString());
		}
		
		return null;
	}
	
}
