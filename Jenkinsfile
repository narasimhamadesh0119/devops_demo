pipeline {

    agent any

    environment {
        IMAGE_NAME = "narasimhamadesh/hello-devops"
        KUBECONFIG = "/var/jenkins_home/.kube/config"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
            }
        }

        stage('Push Docker Image') {
            steps {
                sh "docker push ${IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }

        stage('Update Deployment File') {
            steps {

                sh """
                sed -i "s|image:.*|image: ${IMAGE_NAME}:${BUILD_NUMBER}|g" K8s/deployment.yml
                """
            }
        }

        stage('Deploy To Kubernetes') {
            steps {

                sh 'kubectl apply -f K8s/deployment.yml'

                sh 'kubectl apply -f K8s/service.yml'
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