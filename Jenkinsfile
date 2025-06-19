
pipeline {
    agent any

    environment {
        IMAGE_NAME = 'product-catalog-api'
         PATH = "/usr/local/bin:{env.PATH}"
         }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }

    stage('Test Docker') {
      steps {
        sh 'docker --version'  // checks if Docker command is accessible
        sh 'docker info'       // optional: shows Docker info if accessible
            }
         }
  
        stage('Docker Build') {
            steps {
                echo 'building docker image...'
                sh 'docker build -t product-catalog-api .'
            }
        }

        stage('Docker Push') {
            steps {
                echo 'pushing docker image...'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', 
                usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS')]) {
                        sh """
                            echo DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                            docker push \$IMAGE_NAME
                        """
                }
            }
        }
    }
}
      

 
     