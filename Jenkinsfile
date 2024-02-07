pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'clone ok'
            }
        }
        stage('Build') {
            steps {
                echo 'Build ok'
            }
        }
        stage('Docker login') {
            steps {
                echo 'docker login ok'
            }
        }
         stage('Push to registry') {
            steps {
                echo 'push to registry  ok'
            }
        }
        stage('Test') {
            steps {
                echo 'Test ok'
            }
        }
         stage('Deploy') {
            steps {
                sh "docker-compose up -d"
            }
        }
    }
}
