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
        stage('Deploy') {
            steps {
                echo 'Deploying...'
        }
            }

        stage('Test Docker') {
            steps {
            sh 'docker --version'
            sh 'docker info'
            }
        }
        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -tproduct-catalog-api .'
            }
        }
        stage('Docker Push') {
    steps {
        
                withCredentials([usernamePassword(credentialsId: 'docker-pass', 
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                        echo "DOCKER_PAT" | docker login -u hakeemcash --password-stdin
                        docker push \$IMAGE_NAME
                    """
                }
            }
        }
    }
 }
 
