resource "google_cloud_run_service" "portfolio" {
  name     = var.service_name
  location = var.region

  template {
    spec {
      containers {
        image = var.image_name
        
        resources {
          limits = {
            cpu    = "1000m"
            memory = "512Mi"
          }
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# IAM policy to make the service public
resource "google_cloud_run_service_iam_member" "public" {
  location = google_cloud_run_service.portfolio.location
  service  = google_cloud_run_service.portfolio.name
  role     = "roles/run.invoker"
  member   = "allUsers"
} 