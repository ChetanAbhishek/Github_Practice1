pipeline {
    agent any

    tools {
        nodejs 'NodeJS_25'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ChetanAbhishek/Github_Practice1.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                  npm install
                  npx playwright install --with-deps
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh '''
                  npx playwright test
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }
}