import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class FormularioLocalStorage {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Formulario con LocalStorage");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(3, 2));

        JLabel nameLabel = new JLabel("Nombre:");
        JTextField nameField = new JTextField();
        JLabel emailLabel = new JLabel("Correo Electrónico:");
        JTextField emailField = new JTextField();

        JButton submitButton = new JButton("Enviar");

        submitButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String name = nameField.getText();
                String email = emailField.getText();
                saveData(name, email); // Llamada a la función JavaScript para guardar datos en localStorage
                JOptionPane.showMessageDialog(frame, "Nombre: " + name + "\nCorreo Electrónico: " + email);
            }
        });

        panel.add(nameLabel);
        panel.add(nameField);
        panel.add(emailLabel);
        panel.add(emailField);
        panel.add(new JLabel()); // Espacio en blanco
        panel.add(submitButton);

        frame.add(panel);
        frame.setVisible(true);
    }

    // Función para ejecutar JavaScript que guarda datos en localStorage
    public static void saveData(String name, String email) {
        String script = "localStorage.setItem('name', '" + name + "');" +
                        "localStorage.setItem('email', '" + email + "');";
        String[] command = {"bash", "-c", "node -e \"" + script + "\""};
        try {
            Runtime.getRuntime().exec(command);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
