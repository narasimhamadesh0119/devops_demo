pipeline {

    agent any

    environment {
        KUBECONFIG = "/var/jenkins_home/.kube/config"
        IMAGE_NAME = "narasimhamadesh/hello-devops-pipeline:latest"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push Image To DockerHub') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy To Kubernetes') {
            steps {

                sh 'kubectl apply -f K8s/deployment.yml'

                sh 'kubectl apply -f K8s/service.yml'
            }
        }

        stage('Restart Deployment') {
            steps {
                sh 'kubectl rollout restart deployment hello-app'
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