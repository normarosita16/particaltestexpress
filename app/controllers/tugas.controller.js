// Library

const httpStatus = require("http-status-codes");

// UTILS

const response = require("../libs/utils/response-api");

// MODEL

const db = require("../models/index");

const Tugas = db.Tugas;
const Karyawan = db.Karyawan;

exports.create = async (req, res) => {
  const { title, deskripsi } = req.body;
  const { karyawanid } = req.params;

  const karyawancheck = await Karyawan.findOne({
    where: {
      id: karyawanid,
    },
  });
  if (!karyawancheck) {
    res
      .status(httpStatus.BAD_REQUEST)
      .json(response.error("Bad Request", `karyawan tidak tersedia`));
  }

  Tugas.create({
    title,
    deskripsi,
    karyawanid,
  })
    .then((result) => {
      res.status(httpStatus.CREATED).json(response.success("Success", result));
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.list = (req, res) => {
  Tugas.findAll({
    include: [
      {
        model: db.Karyawan,
        as: "karyawan",
        attributes: ["id", "nama"],
      },
    ],
  })
    .then((data) => {
      res.status(httpStatus.OK).json(response.success("Success", data));
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = async (req, res) => {
  const { title, deskripsi } = req.body;
  const id = req.params.id;

  Tugas.update(
    {
      title,
      deskripsi,
    },

    {
      where: { id },
    }
  )
    .then((result) => {
      if (result == 0)
        return res
          .status(httpStatus.NOT_FOUND)
          .json(response.error("Not Found", `Tugas with ID ${id} Not Found`));

      Karyawan.findByPk(id).then((data) => {
        res.status(httpStatus.OK).json(response.success("Success", data));
      });
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  await Tugas.destroy({
    where: { id },
  })

    .then((result) => {
      if (result == 0)
        return res
          .status(httpStatus.NOT_FOUND)
          .json(response.error("Not Found", `Tugas with ID ${id} Not Found`));

      res.status(httpStatus.OK).json(response.success("Success", {}));
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
