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

module "google_apis" {
  source = "./modules/google_apis"

  project_id = var.project_id
}

module "artifact_registry" {
  source = "./modules/artifact_registry"

  project_id     = var.project_id
  region         = var.region
  repository_id  = var.repository_id
  
  depends_on = [module.google_apis]
}

module "cloud_run" {
  source = "./modules/cloud_run"

  project_id    = var.project_id
  region        = var.region
  service_name  = var.service_name
  image_name    = var.image_name
  
  depends_on = [module.google_apis]
} 