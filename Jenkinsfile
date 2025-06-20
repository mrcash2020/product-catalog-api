 pipeline {
    agent any

    environment {
        IMAGE_NAME = 'product-catalog-api'
        PATH = "/usr/local/bin:${env.PATH}"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
                sh 'npm run build' // ensure build script exists
            }
        }

        stage('Test') { echo 'Testing...'
                sh 'npm test'
        }
    }

        stage('Deploy') {
            steps 
                echo 'Deploying...'
        }
 }

        stage('Test Docker') 
            steps 
                sh 'docker –version'
                sh 'docker info'
        stage('Docker Build') 
            steps 
                echo 'Building Docker image...'
                sh 'docker build -tIMAGE_NAME .'
            }
        }

        stage('Docker Push') {
            steps {
                echo 'Pushing Docker image...'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', 
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                        echo \DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker push \$IMAGE_NAME
                    """
                }
            }
        }
    }
}
            

