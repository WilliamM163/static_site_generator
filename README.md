# Static Site Generator

This is a simple static site generator that converts Markdown files into HTML.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

You'll need [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed on your system.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/
    cd static_site_generator
    ```

2.  **Install npm dependencies:**

    ```bash
    npm install
    ```

3.  **Create the `drop_box` folder:**

    In the root of your project directory, create a new folder named `drop_box`. This is where you'll place your Markdown files for conversion.

    ```bash
    mkdir drop_box
    ```

### Usage

1.  **Place your Markdown file:**

    Copy the Markdown file you want to convert (e.g., `my_document.md`) into the `drop_box` folder.

2.  **Run the script:**

    Open your terminal, navigate to the root of your project directory, and run the script with the following command, replacing `my_document.md` with the actual name of your Markdown file (including the `.md` extension):

    ```bash
    node index.js my_document.md
    ```

    The generated HTML file will be placed in the `drop_box` folder.
