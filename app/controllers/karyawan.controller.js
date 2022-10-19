// Library

const httpStatus = require("http-status-codes");

// UTILS

const response = require("../libs/utils/response-api");

// MODEL

const db = require("../models/index");

const Karyawan = db.Karyawan;

exports.create = async (req, res) => {
  const { nama } = req.body;

  const karyawancheck = await Karyawan.findOne({
    where: {
      nama: nama,
    },
  });
  if (karyawancheck) {
    res
      .status(httpStatus.BAD_REQUEST)
      .json(response.error("Bad Request", `nama sudah tersedia`));
  }

  Karyawan.create({
    nama,
  })
    .then((result) => {
      res.status(httpStatus.CREATED).json(response.success("Success", result));
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.list = (req, res) => {
  Karyawan.findAll()
    .then((data) => {
      res.status(httpStatus.OK).json(response.success("Success", data));
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = async (req, res) => {
  const { nama } = req.body;
  const id = req.params.id;

  Karyawan.update(
    {
      nama: nama,
    },

    {
      where: { id },
    }
  )
    .then((result) => {
      if (result == 0)
        return res
          .status(httpStatus.NOT_FOUND)
          .json(
            response.error("Not Found", `Karyawan with ID ${id} Not Found`)
          );

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

  await Karyawan.destroy({
    where: { id },
  })

    .then((result) => {
      if (result == 0)
        return res
          .status(httpStatus.NOT_FOUND)
          .json(
            response.error("Not Found", `Karyawan with ID ${id} Not Found`)
          );

      res.status(httpStatus.OK).json(response.success("Success", {}));
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
