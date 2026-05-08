pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hello_devops_pipeline .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop app || true
                docker rm app || true
                docker run -d -p 7000:7000 --name app hello_devops_pipeline
                '''
            }
        }
    }
}
