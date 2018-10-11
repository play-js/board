package model;

import util.DbUtil;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PostDAO {
    private PostDAO() {
    }

    Connection conn;
    PreparedStatement pstmt;
    ResultSet rs;
    StringBuffer query;

    private static PostDAO dao;

    public static PostDAO getInstance() {
        if (dao == null) {
            dao = new PostDAO();
        }
        return dao;
    }

    public int insertPostInfo(String writer, String title, String contents) throws SQLException {
        int result = 0;

        try {
            conn = DbUtil.getCon();

            query = new StringBuffer();
            query.append("INSERT INTO BOARD ");
            query.append("VALUES(seq.nextval,?,?,?)");
            pstmt = conn.prepareStatement(query.toString());
            // parameterIndex는 쿼리문의 ? 순서대로 적어주며, 1부터 시작한다.
            pstmt.setString(1, writer);
            pstmt.setString(2, title);
            pstmt.setString(3, contents);

            result = pstmt.executeUpdate();

            DbUtil.closeCon();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        System.out.println("insertPostInfo result :" + result);

        return result;
    }

    public int deletePostInfo(int seq) throws SQLException {
        int result = 0;

        System.out.println("DAO deletePostInfo method!!");

        try {
            conn = DbUtil.getCon();
            query = new StringBuffer();
            query.append("DELETE FROM BOARD WHERE SEQ=?");
            pstmt = conn.prepareStatement(query.toString());

            pstmt.setInt(1, seq);

            result = pstmt.executeUpdate();

            DbUtil.closeCon();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        System.out.println("deletePostInfo result :" + result);

        return result;
    }

    public List<Post> selectPost() throws SQLException {
        List<Post> list = new ArrayList<Post>();

        try {
            conn = DbUtil.getCon();

            String selectAllStr = "SELECT SEQ, WRITER, TITLE, CONTENTS FROM BOARD";
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(selectAllStr);

            setSelectionList(list, rs);

            DbUtil.closeCon();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }

    public List<Post> selectPost(int seq) throws SQLException {
        List<Post> list = new ArrayList<Post>();

        try {
            conn = DbUtil.getCon();

            String selectAllStr = "SELECT SEQ, WRITER, TITLE, CONTENTS FROM BOARD WHERE SEQ =" + seq;
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(selectAllStr);

            setSelectionList(list, rs);

            DbUtil.closeCon();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }

    private void setSelectionList(List<Post> list, ResultSet rs) throws SQLException {
        while (rs.next()) {
            Post post = new Post();
            post.setBoardNum(rs.getInt("seq"));
            post.setWriter(rs.getString("writer"));
            post.setTitle(rs.getString("title"));
            post.setContents(rs.getString("contents"));
            list.add(post);
        }
    }

    public void updatePost(int seq, String writer, String title, String contents) {

        try {
            conn = DbUtil.getCon();

            pstmt = conn.prepareStatement("update BOARD set WRITER=?, TITLE=?, CONTENTS=? where SEQ=?");
            pstmt.setString(1, writer);
            pstmt.setString(2, title);
            pstmt.setString(3, contents);
            pstmt.setInt(4, seq);
            pstmt.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
}
