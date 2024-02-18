const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const projectsSchema = require("../models/projects");

router.get("/projects", async (req, res) => {
  try {
    const data = await projectsSchema.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await projectsSchema.findById(id);
    if (!data) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/projects", async (req, res) => {
  const { title, technologies, description, link, github, thumbnail, longDesc, images, moreContent } = req.body;

  try {
    const newProject = new projectsSchema({
      title,
      technologies,
      description,
      link,
      github,
      thumbnail,
      longDesc,
      images,
      moreContent,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/projects/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProject = await projectsSchema.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/projects/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await projectsSchema.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
