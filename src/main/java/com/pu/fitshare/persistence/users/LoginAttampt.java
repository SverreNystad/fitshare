package com.pu.fitshare.persistence.users;

/**
 * LoginAttampt will take the input from the http request and sanitize it
 * before letting it pass futher.
 */
public class LoginAttampt {
    private String username;
    private String password;
    private static int minPasswordLength = 8;

    public LoginAttampt(final String username, final String password) throws IllegalArgumentException {
        sanitize(username, password);
        this.username = username;
        this.password = password;
    }

    /**
     * Make sure there are no malicious input.
     * 
     * @param username to check for bad input
     * @param password to check for bad input
     * @throws IllegalArgumentException when there are bad input
     */
    private void sanitize(final String username, final String password) throws IllegalArgumentException {
        if (isLargeEnough(password)) {
            throw new IllegalArgumentException("The password was to short.");
        }
    }


    private boolean isLargeEnough(final String s) {
        return s.length() >= minPasswordLength;
    }


}
