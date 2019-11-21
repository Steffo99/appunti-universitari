package eu.steffo.unimore.dondolo;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class ClickListener implements ActionListener {
    @Override
    public void actionPerformed(ActionEvent actionEvent) {
        if(actionEvent.getActionCommand().equals("Primo")) {
            System.out.println("ok boomer");
        }
    }
}