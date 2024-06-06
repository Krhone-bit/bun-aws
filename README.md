# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Configuring AWS CLI with `aws configure`

### Step-by-Step Guide to Configuring AWS CLI

#### 1. Install AWS CLI

Before configuring AWS CLI, ensure you have it installed on your system. If you haven't installed it yet, follow the official AWS instructions to install AWS CLI: [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).

#### 2. Run `aws configure`

Open your terminal or command prompt and execute the following command:

```bash
aws configure
```

This command will prompt you to enter the following values:

- **AWS Access Key ID**: Your AWS access key ID.
- **AWS Secret Access Key**: Your AWS secret access key.
- **Default region name**: The default region for your AWS commands (e.g., `us-west-2`).
- **Default output format**: The default output format (e.g., `json`, `text`, `table`).

#### 3. Configuration Process

When you run `aws configure`, you will see something like this:

```plaintext
AWS Access Key ID [None]: YOUR_ACCESS_KEY_ID
AWS Secret Access Key [None]: YOUR_SECRET_ACCESS_KEY
Default region name [None]: YOUR_DEFAULT_REGION
Default output format [None]: json
```

Replace `YOUR_ACCESS_KEY_ID`, `YOUR_SECRET_ACCESS_KEY`, and `YOUR_DEFAULT_REGION` with your specific values. You can choose the output format you prefer (in this example, `json` is used).

#### 4. Configuration Files

The entered values are saved in the following files:

- **Credentials**: `~/.aws/credentials`
- **Configuration**: `~/.aws/config`

#### Example `credentials` File

```plaintext
[default]
aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY
```

#### Example `config` File

```plaintext
[default]
region = YOUR_DEFAULT_REGION
output = json
```

### Validate the Configuration

To ensure the configuration has been set up correctly, you can run a simple AWS CLI command, such as listing your S3 buckets:

```bash
aws s3 ls
```

If everything is configured correctly, you should see a list of your S3 buckets (if you have any).

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.
