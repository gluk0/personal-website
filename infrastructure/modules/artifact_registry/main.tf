resource "google_artifact_registry_repository" "portfolio" {
  location      = var.region
  repository_id = var.repository_id
  description   = "Docker repository for portfolio application"
  format        = "DOCKER"

  docker_config {
    immutable_tags = true
  }
}
