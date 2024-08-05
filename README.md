<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">TOURIST_DESTINATION_API</h1>
</p>


<hr>


---

## 🚀 Getting Started

### ⚙️ Installation

1. Clone the Tourist_Destination_API repository:

```sh
git clone https://github.com/Aman254/Tourist_Destination_API
```

2. Change to the project directory:

```sh
cd Tourist_Destination_API
```

3. Install the dependencies:

```sh
npm install
```
3. Configure the config.env file:

```sh
NODE_ENV=development
PORT= "Your Port Number"
DATABASE = "Your MongoDb Databse Url."
```

3. Run the Script to Import the Development Data:

```sh
cd Backend/dev-data/data
run: node import-dev-data.js --import
```

### 🤖 Running Tourist_Destination_API

Use the following command to run Tourist_Destination_API:
After Importing the Development Data: Make sure you are in the Root Directory:

```sh
nodemon run start:dev
```

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Aman254/Tourist_Destination_API/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Report Issues](https://github.com/Aman254/Tourist_Destination_API/issues)**: Submit bugs found or log feature requests for Tourist_destination_api.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Aman254/Tourist_Destination_API
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.


