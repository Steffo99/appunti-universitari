package eu.steffo.unimore.dondolo;

import java.awt.*;
import javax.swing.*;

public class TriButtonPanel extends JPanel {
    TriButtonPanel() {
        super();
        JButton first = new JButton("Primo");
        first.addActionListener(new ClickListener());
        JButton second = new JButton("Secondo");
        JButton third = new JButton("Terzo");
        this.add(first);
        this.add(second);
        this.add(third);
    }
}
