package util;

import java.sql.*;

public class DbUtil {

    private static Connection con;
    private static String user = "shkyung";
    private static String pwd = "serinak0201";
    private static String url = "jdbc:oracle:thin:@myoracledb.crcx0hayinwj.ap-northeast-2.rds.amazonaws.com:1521:orcl";

    public static Connection getCon() throws SQLException {
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            con = DriverManager.getConnection(url, user, pwd);

            System.out.println("***************database connection Success.!!");
        } catch(ClassNotFoundException e) {
            e.printStackTrace();
        }

        return con;
    }

    public static void closeCon() throws SQLException{
        con.close();
    }

}
