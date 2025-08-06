# Sürdürülebilir ve Dayanıklı Ahşap Yapılar

This is a simple static website for the "Sürdürülebilir ve Dayanıklı Ahşap Yapılar ile Afet Sonrası Yaşamın Yeniden İnşası Projesi" project.

## Viewing the Website

To view the website, you need to run a simple web server from the root directory of this project. This is because the website uses the `fetch` API to load the header and footer, which doesn't work when opening the HTML files directly in the browser (using the `file://` protocol).

### Using Python's built-in web server

If you have Python installed, you can use its built-in web server.

1.  Open a terminal or command prompt.
2.  Navigate to the root directory of this project.
3.  Run the following command:

    ```bash
    python -m http.server
    ```

    If you are using Python 2, the command is:

    ```bash
    python -m SimpleHTTPServer
    ```

4.  Open your web browser and go to `http://localhost:8000`.

This will start a web server and you will be able to see the website with the header and footer correctly loaded.
