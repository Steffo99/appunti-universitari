package eu.steffo.unimore.dondolo;

import java.awt.*;
import javax.swing.*;
import javax.swing.border.Border;

public class Main {

    //Metodi ``public static void`` con ``String[] args`` possono essere considerati main
    public static void main(String[] args) {
        JFrame jf = new JFrame("Main");
        jf.setLayout(null);

        TriButtonPanel jp = new TriButtonPanel();
        jp.setSize(200, 200);
        jp.setVisible(true);
        jf.add(jp);

        jf.pack();
        jf.setVisible(true);
    }
}
