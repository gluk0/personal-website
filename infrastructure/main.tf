terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.0"
    }
  }
  backend "gcs" {
    bucket = "rich-clarke-3526-state"
    prefix = "portfolio_website/state"
  }
}


provider "google" {
  project = var.project_id
  region  = var.region
}


module "artifact_registry" {
  source = "./modules/artifact_registry"

  project_id   = var.project_id
  region       = var.region
  repository_id = var.repository_id
}

module "cloud_run" {
  source = "./modules/cloud_run"

  project_id    = var.project_id
  region        = var.region
  service_name  = var.service_name
  image_name    = var.image_name
} 
