<%--
  Created by IntelliJ IDEA.
  User: gyeongseonhui
  Date: 2018. 9. 10.
  Time: PM 10:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.SQLException" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
  TESTTESTTEST !!!
  </body>

  <%
    Connection con = null;

    String user = "shkyung";
    String password = "serinak0201";
    String url = "jdbc:oracle:thin:@myoracledb1.crcx0hayinwj.ap-northeast-2.rds.amazonaws.com:1521:orcl";
    System.out.println("************ print here!!!!");
    try {

      Class.forName("oracle.jdbc.driver.OracleDriver");
      con = DriverManager.getConnection(url, user, password);

      System.out.println("***************database connection Success.!!");
    } catch (ClassNotFoundException e) {
      e.printStackTrace(); //database driver class Not load
    } catch (SQLException e) {
      e.printStackTrace(); //database connection failed
    } catch (Exception e) {
      e.printStackTrace(); //unknown Exception..
    } finally {
      try {
        if(con != null) con.close();
      } catch (SQLException e) {
        e.printStackTrace();
      }
    }%>
</html>
