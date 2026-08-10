import java.sql.*;

public class CRUDOperations {

    static String url = "jdbc:mysql://localhost:3306/internship";
    static String username = "root";
    static String password = "";

    public static void main(String[] args) {

        try {
            Connection con = DriverManager.getConnection(
                url, username, password
            );

            // CREATE
            String insert = "INSERT INTO students(name, course) VALUES (?, ?)";
            PreparedStatement ps = con.prepareStatement(insert);

            ps.setString(1, "Sumanth");
            ps.setString(2, "Java");

            ps.executeUpdate();
            System.out.println("Record inserted.");

            // READ
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            while (rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name") + " " +
                    rs.getString("course")
                );
            }

            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}