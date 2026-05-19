pipeline {

    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t hello_devops_pipeline:latest .'
            }
        }

        stage('Deploy To Kubernetes') {
            steps {

                sh 'kubectl apply -f k8s/deployment.yml'

                sh 'kubectl apply -f k8s/service.yml'
            }
        }

        stage('Verify Deployment') {
            steps {

                sh 'kubectl get pods'

                sh 'kubectl get svc'
            }
        }
    }
}
