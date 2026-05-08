pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build --progress=plain -t hello_devops_pipeline .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop app || true
                docker rm app || true
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker run -d -p 7000:7000 --name app hello_devops_pipeline'
            }
        }

        stage('Verify Container') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
