/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.elon.events;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author sscro
 */
@WebServlet(name = "HalloweenServlet", urlPatterns = {"/goelon"})
public class HalloweenServlet extends HttpServlet {

     @Override
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
        String url = "/email.html";
        
        // get current action
        String action = request.getParameter("action");
        if (action == null) {
            action = "join";  // default action
        }

        // perform action and set URL to appropriate page
        if (action.equals("join")) {
            url = "/email.html";    // the "join" page
        } 
        else if (action.equals("add")) {
            // get parameters from the request
            String firstName = request.getParameter("fname");
            String lastName = request.getParameter("lname");
            String email = request.getParameter("email");
            String zip = request.getParameter("Zip");
            
     
            System.out.print("first name" +firstName + "last name" + lastName + "email" + email + "Zip" +zip);
            
   
            // validate the parameters
            String message;
            if (firstName == null || lastName == null || email == null || zip==null || 
                firstName.isEmpty() || lastName.isEmpty() || email.isEmpty() || zip.isEmpty())  {
                message = "Please fill out all four text boxes.";
                url = "/email.html";
            } 
            else {
                message = "";
                url = "/subscribe.html";
            }
         
            request.setAttribute("message", message);
        }
        getServletContext()
                .getRequestDispatcher(url)
                .forward(request, response);
    }
    
    @Override
    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {   
        doPost(request, response);
    }
}
