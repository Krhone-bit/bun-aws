# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Configuración de AWS CLI con `aws configure`

#### 1. Instalar AWS CLI

Antes de configurar AWS CLI, asegúrate de tenerlo instalado en tu sistema. Si no lo tienes instalado, puedes seguir las instrucciones oficiales de AWS para instalar AWS CLI: [Instalar AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).

#### 2. Ejecutar `aws configure`

Abre tu terminal o línea de comandos y ejecuta el siguiente comando:

```bash
aws configure
```

Este comando te pedirá que ingreses los siguientes valores:

- **AWS Access Key ID**: Tu ID de clave de acceso de AWS.
- **AWS Secret Access Key**: Tu clave de acceso secreta de AWS.
- **Default region name**: La región predeterminada para tus comandos de AWS (por ejemplo, `us-west-2`).
- **Default output format**: El formato de salida predeterminado (por ejemplo, `json`, `text`, `table`).

#### 3. Proceso de Configuración

Cuando ejecutas `aws configure`, verás algo similar a lo siguiente:

```plaintext
AWS Access Key ID [None]: YOUR_ACCESS_KEY_ID
AWS Secret Access Key [None]: YOUR_SECRET_ACCESS_KEY
Default region name [None]: YOUR_DEFAULT_REGION
Default output format [None]: json
```

Reemplaza `YOUR_ACCESS_KEY_ID`, `YOUR_SECRET_ACCESS_KEY`, y `YOUR_DEFAULT_REGION` con tus valores específicos. Puedes elegir el formato de salida que prefieras (en este ejemplo, se utiliza `json`).

#### 4. Archivos de Configuración

Los valores ingresados se guardan en los siguientes archivos:

- **Credenciales**: `~/.aws/credentials`
- **Configuración**: `~/.aws/config`

#### Ejemplo de Archivo `credentials`

```plaintext
[default]
aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY
```

#### Ejemplo de Archivo `config`

```plaintext
[default]
region = YOUR_DEFAULT_REGION
output = json
```

### Validar la Configuración

Para asegurarte de que la configuración se ha realizado correctamente, puedes ejecutar un comando simple de AWS CLI, como listar tus buckets de S3:

```bash
aws s3 ls
```

Si todo está configurado correctamente, deberías ver una lista de tus buckets de S3 (si tienes alguno).

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.
