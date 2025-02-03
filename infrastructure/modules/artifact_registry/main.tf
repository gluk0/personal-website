resource "google_artifact_registry_repository" "portfolio" {
  location      = var.region
  repository_id = var.repository_id
  description   = "Docker repository for portfolio application"
  format        = "DOCKER"

  docker_config {
    immutable_tags = true
  }
}

# IAM binding for Cloud Run to pull images
resource "google_artifact_registry_repository_iam_member" "cloud_run_pull" {
  location   = google_artifact_registry_repository.portfolio.location
  repository = google_artifact_registry_repository.portfolio.name
  role       = "roles/artifactregistry.reader"
  member     = "serviceAccount:${var.project_id}@appspot.gserviceaccount.com"
} 