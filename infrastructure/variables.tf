variable "project_id" {
  description = "The GCP project ID"
  type        = string
}

variable "region" {
  description = "The GCP region"
  type        = string
  default     = "europe-west2"
}

variable "repository_id" {
  description = "The Artifact Registry repository ID"
  type        = string
  default     = "portfolio"
}

variable "service_name" {
  description = "The Cloud Run service name"
  type        = string
  default     = "portfolio"
}

variable "image_name" {
  description = "The container image name"
  type        = string
} 