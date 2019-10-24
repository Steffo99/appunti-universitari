package eu.steffo.unimore.inputoutput;

import java.io.*;
import java.lang.reflect.Array;

public class IOMain {
    private static FileInputStream getInputStream(File input) {
        try {
            return new FileInputStream(input);
        } catch (FileNotFoundException e) {
            return null;
        }
    }

    private static FileOutputStream getOutputStream(File output) {
        try {
            return new FileOutputStream(output);
        } catch (FileNotFoundException e) {
            return null;
        }
    }

    public static void main(String[] args) {
        FileInputStream inputStream;
        FileOutputStream outputStream;

        try {
            File input = new File(args[0]);
            inputStream = getInputStream(input);
        } catch(ArrayIndexOutOfBoundsException e) {
            System.err.println("error: missing input file argument");
            return;
        }
        try {
            File output = new File(args[1]);
            outputStream = getOutputStream(output);
        } catch(ArrayIndexOutOfBoundsException e) {
            System.err.println("error: missing output file argument");
            return;
        }

        if(inputStream == null) {
            System.err.println("error: missing input file");
            return;
        }
        if(outputStream == null) {
            System.err.println("error: missing output file");
            return;
        }

        try {
            outputStream.write(inputStream.readAllBytes());
            outputStream.close();
        } catch (IOException e) {
            System.err.println("error: i/o error");
        }

        System.out.println("done");
    }
}
