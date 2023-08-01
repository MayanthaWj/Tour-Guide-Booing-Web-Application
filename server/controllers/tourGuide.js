import TourGuide from "../models/tourGuide.js";

export const createTourGuide = async (req, res, next) => {
  const newTourGuide = new TourGuide(req.body);

  try {
    const savedTourGuide = await newTourGuide.save();
    res.status(200).json(savedTourGuide);
  } catch (err) {
    next(err);
  }
};

export const updateTourGuide = async (req, res, next) => {
  try {
    const updatedTourGuide = await TourGuide.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTourGuide);
  } catch (err) {
    next(err);
  }
};

export const deleteTourGuide = async (req, res, next) => {
  try {
    await TourGuide.findByIdAndDelete(req.params.id);
    res.status(200).json("Tour Guide had been deleted!");
  } catch (err) {
    next(err);
  }
};

export const getAllTourGuide = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const tourGuides = await TourGuide.find({
      ...others,
      price: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(tourGuides);
  } catch (err) {
    next(err);
  }
};

export const getTourGuide = async (req, res, next) => {
  //console.log(req.params);
  try {
    const tourGuide = await TourGuide.findById(req.params.id);
    res.status(200).json(tourGuide);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return TourGuide.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByProvince = async (req, res, next) => {
  const cities = req.query.provinces.split(",");
  try {
    const list = await Promise.all(
      cities.map((province) => {
        return TourGuide.countDocuments({ province: province });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
