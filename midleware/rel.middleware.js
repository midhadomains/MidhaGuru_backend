BoardSchema.pre("deleteOne", async function (next) {
    const boardId = this.getQuery()["_id"];
    await Class.deleteMany({ board: boardId });
    next();
  });
  