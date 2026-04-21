pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/narasimhamadesh0119/devops_demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hello_devops .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop app || true
                docker rm app || true
                docker run -d -p 7000:7000 --name app hello_devops
                '''
            }
        }
    }
}
